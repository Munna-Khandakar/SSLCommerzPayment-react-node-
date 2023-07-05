const TOASTER = {
  success: ({
    title = "",
    message = "",
  }: {
    title?: string;
    message?: string;
  }) => {


    if (typeof window !== "undefined") {
      document.dispatchEvent(
        new CustomEvent("toast", {
          detail: { status: true, title, message, type: "success" },
        }),
      );
    }
  },
  failed: ({
    title = "",
    message = "",
  }: {
    title?: string;
    message?: string;
  }) => {
    if (typeof window !== "undefined")
      document.dispatchEvent(
        new CustomEvent("toast", {
          detail: { status: true, title, message, type: "error" },
        }),
      );
  },
};
export default TOASTER;
