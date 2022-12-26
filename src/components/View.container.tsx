import { useSurface } from "./useSurface"
import { ViewColorTemplate } from "./View.color.template";

export const View = () => {
  const props = useSurface()
  return (
    <ViewColorTemplate {...props} />
  );
};