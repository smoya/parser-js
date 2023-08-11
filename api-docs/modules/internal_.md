[@asyncapi/parser](../README.md) / [Exports](../modules.md) / <internal\>

# Module: <internal\>

## Table of contents

### Type Aliases

- [JSONSchema7Type](internal_.md#jsonschema7type)
- [JSONSchema7TypeName](internal_.md#jsonschema7typename)
- [Record](internal_.md#record)

## Type Aliases

### JSONSchema7Type

Ƭ **JSONSchema7Type**: `string` \| `number` \| `boolean` \| `JSONSchema7Object` \| `JSONSchema7Array` \| ``null``

Primitive type

**`See`**

https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.1.1

#### Defined in

node_modules/@types/json-schema/index.d.ts:582

___

### JSONSchema7TypeName

Ƭ **JSONSchema7TypeName**: ``"string"`` \| ``"number"`` \| ``"integer"`` \| ``"boolean"`` \| ``"object"`` \| ``"array"`` \| ``"null"``

Primitive type

**`See`**

https://tools.ietf.org/html/draft-handrews-json-schema-validation-01#section-6.1.1

#### Defined in

node_modules/@types/json-schema/index.d.ts:569

___

### Record

Ƭ **Record**<`K`, `T`\>: { [P in K]: T }

Construct a type with a set of properties K of type T

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `any` |
| `T` | `T` |

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1590
