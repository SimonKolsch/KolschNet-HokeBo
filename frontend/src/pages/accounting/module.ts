import { json } from "react-router-dom";
import {AccountApi} from "../../common/api";
import {Account} from "../../common/types";


export async function accountLoader() {

  let test: Account[] = await AccountApi.getAll();

  return json(test, {status: 200});
}
