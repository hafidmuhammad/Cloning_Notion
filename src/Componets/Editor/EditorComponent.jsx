import { useState, useEffect } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import LinkTool from '@editorjs/link';
import SimpleImage from '@editorjs/simple-image';
import ImageTool from '@editorjs/image';
import Checklist from '@editorjs/checklist';
import RawTool from '@editorjs/raw';
import Embed from '@editorjs/embed';
import Quote from '@editorjs/quote';
import CodeTool from '@editorjs/code';
import Table from '@editorjs/table';

const EditorComponent = () => {
    const [editor, setEditor] = useState(null);

    useEffect(() => {
        if (!editor) {
            const editorInstance = new EditorJS({
                holder: 'editor',
                tools: {
                    header: {
                        class: Header,
                        shortcut: 'CMD+SHIFT+H',
                        config: {
                            placeholder: 'Enter a header',
                            levels: [2, 3, 4],
                            defaultLevel: 3
                        }
                    },
                    list: List,
                    linkTool: {
                        class: LinkTool,
                        config: {
                            shortcut: 'CMD+K'
                        }
                    },
                    simpleImage: SimpleImage,
                    image: ImageTool,
                    checklist: {
                        class: Checklist,
                        inlineToolbar: true,
                    },
                    raw: RawTool,
                    embed: Embed,
                    quote: Quote,
                    code: CodeTool,
                    table: Table,
                },
                data: {
                    blocks: []
                }
            });
            setEditor(editorInstance);
        }

        // Cleanup on unmount
        return () => {
            if (editor) {
                editor.destroy();
                setEditor(null);
            }
        };
    }, [editor]);

    return <div id="editor"></div>;
}

export default EditorComponent;
