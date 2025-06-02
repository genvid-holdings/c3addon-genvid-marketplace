const C3 = globalThis.C3;

// Update the DOM_COMPONENT_ID to be unique to your plugin.
// It must match the value set in domSide.js as well.
const DOM_COMPONENT_ID = "Genvid_Marketplace";

class MarketplaceInstance extends globalThis.ISDKInstanceBase {
  _name = "";
  _info = {};

  constructor() {
    // Note that DOM_COMPONENT_ID must be passed to the base class as an additional parameter.
    super({ domComponentId: DOM_COMPONENT_ID });

    this._name = "";
    this._info = {};

		this.runtime.sdk.addLoadPromise(
			this._postToDOMAsync("get-marketplace-info")
			.then(data_ =>
			{
				const data = data_ as JSONObject;
				this._name = data['name'] as string;
        this._info = data['info'] as JSONObject;
			})
		);
  }

  _release() {
    super._release();
  }

  _getDebuggerProperties() {
    const prefix = "plugins.Genvid_Marketplace.debugger.";
    return [
      {
        title: prefix + 'title',
        properties: [
          {name: prefix + 'name', value: this._name },
          {name: prefix + 'info', value: this._info }
        ]
      }
    ]; 
  }

  _saveToJson() {
    return {
      // data to be saved for savegames
    };
  }

  _loadFromJson(/*o: JSONValue*/) {
    // load state for savegames
  }
}

C3.Plugins.Genvid_Marketplace.Instance = MarketplaceInstance;

export type { MarketplaceInstance as SDKInstanceClass };
