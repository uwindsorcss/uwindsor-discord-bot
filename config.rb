require 'hocon'

# Abstracted way to use config
# This lets you use config with all the discord.rb containers
module Config
  CONFIG = Hocon.load("config.conf")
  IMAGE_DIRECTORY_URL = CONFIG["urls"]["image_directory_url"]
  LATEX_DIRECTORY_RELATIVE_PATH = "tmp"
  BOT_USER_ID = CONFIG["bot_user_id"]
  EXCLUDE_ROLES = [
    "Bot",
    "Admin",
    "Moderator",
    "CSS President",
    "CSS Board Executive",
    "CSS Board Head",
    "CSS Board Member",
  ]
  
end