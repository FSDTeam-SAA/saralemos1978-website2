import { useMutation } from "@tanstack/react-query";
import { postAskForHelp } from "../api";
import { AskForHelpData } from "../type/contact";

export function usePostAskForHelp() {
  return useMutation({
    mutationFn: (data: AskForHelpData) => postAskForHelp(data),
  });
}
