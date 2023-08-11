import { BaseModel } from './base';
import { ExtensionsMixinInterface } from './mixins';

/**
 * Represents a Oauth Flow Object.
 */
export interface OAuthFlowInterface<J extends Record<string, any> = Record<string, any>> extends BaseModel<J>, ExtensionsMixinInterface {
  hasAuthorizationUrl(): boolean;
  authorizationUrl(): string | undefined;
  hasTokenUrl(): boolean;
  tokenUrl(): string | undefined;
  hasRefreshUrl(): boolean;
  refreshUrl(): string | undefined;
  scopes(): Record<string, string> | undefined;
}
