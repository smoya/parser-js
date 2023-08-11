import type { BaseModel } from './base';
import type { ExtensionsMixinInterface } from './mixins';

/**
 * Represents a License Object.
 */
export interface LicenseInterface extends BaseModel, ExtensionsMixinInterface {
  name(): string;
	hasUrl(): boolean;
  url(): string | undefined;
}
