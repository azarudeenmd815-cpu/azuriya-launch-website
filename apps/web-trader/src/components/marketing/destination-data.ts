import { productDestinations } from "./destination-product-data";
import { businessDestinations } from "./destination-business-data";

export const destinationDefinitions = [
  ...productDestinations,
  ...businessDestinations,
];
export function getDestination(path: string) {
  return destinationDefinitions.find(
    (destination) => destination.page.path === path,
  );
}
