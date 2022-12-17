import { config } from "dotenv";
config();

import { connect } from "./database/sequelize";

connect();
