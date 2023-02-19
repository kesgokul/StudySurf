import { ethers } from "ethers";
import { standardUri, enterpriseUri } from "./uri/uri";

const ONE_MONTH = ethers.BigNumber.from(30 * 24 * 60 * 60);
export const STANDARD_PRICE = ethers.utils.parseEther("0.01");
export const ENTERPRISE_PRICE = ethers.utils.parseEther("0.07");

// export const standardArgs = [
//   "standard",
//   standardUri,
//   STANDARD_PRICE,
//   ONE_MONTH,
// ];
// export const enterpriceArgs = [
//   "enterprise",
//   enterpriseUri,
//   ENTERPRISE_PRICE,
//   ONE_MONTH,
// ];
