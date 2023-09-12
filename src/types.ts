import {
  SlashCommandBuilder,
  SlashCommandSubcommandsOnlyBuilder,
  Client,
  Collection,
  Awaitable,
  CacheType,
  Message,
  AutocompleteInteraction,
  ChatInputCommandInteraction,
} from "discord.js";

interface ConfigType {
  mode: BotModes;
  debug: boolean;
  image_directory_url: string;
  year_roles: {
    [key: string]: string;
  };
  google_search_key: "";
  google_search_id: "";
  features: {[keyof: string]: boolean | undefined};
}

interface buildingType {
  code: string;
  name: string;
}

interface CommandType {
  data:
    | SlashCommandBuilder // normal slash command builder instance
    | SlashCommandSubcommandsOnlyBuilder
    | Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup">; // slash command without any subcommands
  execute: (
    interaction: ChatInputCommandInteraction<CacheType>,
    message?: Message | null
  ) => Promise<any>;
  autoComplete?: (interaction: AutocompleteInteraction) => Promise<any>;
}

interface EventType {
  name: string;
  once: boolean;
  execute: (...arg: any[]) => Awaitable<void> | void;
}

interface ClientType extends Client {
  commands: Collection<string, CommandType>;
}

enum BotModes {
  production,
  development,
}

interface ASCIIArt {
  [key: string]: {
    art: string;
    defaultString: string;
  };
}

export {
  ConfigType,
  buildingType,
  CommandType,
  EventType,
  ASCIIArt,
  ClientType,
  BotModes,
};
