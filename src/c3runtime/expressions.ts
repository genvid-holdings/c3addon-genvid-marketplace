
import type { SDKInstanceClass } from "./instance.ts";

const C3 = globalThis.C3;

C3.Plugins.Genvid_Marketplace.Exps =
{
	// SDK
	Marketplace(this: SDKInstanceClass) {
		return this._name;
	},
	MarketplaceInfo(this: SDKInstanceClass) {
		return JSON.stringify(this._info);;
	},
};
