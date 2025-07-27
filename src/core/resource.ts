// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Czbet } from '../client';

export abstract class APIResource {
  protected _client: Czbet;

  constructor(client: Czbet) {
    this._client = client;
  }
}
