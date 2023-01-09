import { useSurface } from "../useSurface"
import { ViewTemplate } from "./View.template";

export const View = () => {
  const props = useSurface()
  return (
    <ViewTemplate {...props} />
  );
};