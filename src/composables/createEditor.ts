import { EditorState, type Extension } from "@codemirror/state";
import { EditorView } from "codemirror";

export function useCreateEditor() {
  const createEditor = (mountPoint: HTMLElement, extensions: Extension[], doc: string) => {
    const state = EditorState.create({ doc, extensions });

    return new EditorView({ state, parent: mountPoint });
  };

  return { createEditor };
}
