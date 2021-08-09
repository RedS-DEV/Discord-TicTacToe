/*
 *     Discord Tic-Tac-Toe
 *     Copyright (C) 2021  Enes Genç
 *
 *     This program is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU Affero General Public License as published
 *     by the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     This program is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU Affero General Public License for more details.
 *
 *     You should have received a copy of the GNU Affero General Public License
 *     along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { Event, PieceContext /* Store */ } from "@sapphire/framework";

class event extends Event {
  constructor(context: PieceContext) {
    super(context, {
      once: true,
    });
  }

  async run() {
    const { /* client, */ logger } = this.context;
    /*
    const stores = [...client.stores.values()];

    // eslint-disable-next-line no-restricted-syntax
    for (const store of stores) logger.info(store);
    */

    logger.info(`Logged in as ${this.context.client.user?.tag}`);
  }
}

export default event;
