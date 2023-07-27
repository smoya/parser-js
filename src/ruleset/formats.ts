/* eslint-disable security/detect-unsafe-regex */

import { isObject } from '../utils';
import { schemas } from '@asyncapi/specs'

import type { Format } from '@stoplight/spectral-core';
import type { MaybeAsyncAPI } from '../types';

const AsyncAPIVersionRegexp = /^(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)$/

export const isAsyncAPIVersion = (version: string, document: unknown): document is { asyncapi: string } & Record<string, unknown> =>
  isObject(document) && 'asyncapi' in document 
  && AsyncAPIVersionRegexp.test(String((document as MaybeAsyncAPI).asyncapi))
  && Object.keys(allAsyncAPIFormatsPerVersion).includes(`${version.split('.')[0]}.${version.split('.')[1]}.0`);

export function createFormat(version: string): Format {
  const format: Format = (document: unknown): boolean =>
    isAsyncAPIVersion(version, document);
  
  const [major, minor, _] = version.split('.');
  format.displayName = `AsyncAPI ${major}.${minor}.x`;

  return format; 
}

export const allAsyncAPIFormatsPerVersion = Object.fromEntries(Object.entries(schemas).reverse().map(([version]) => [version, createFormat(version)])); // reverse is needed for giving newer versions a higher priority when matching
export const allAsyncAPIFormats: Format[] = Object.values(allAsyncAPIFormatsPerVersion);

