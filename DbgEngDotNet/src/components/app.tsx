import { Dialog } from "@blueprintjs/core";
import * as React from "react";

export class App extends React.Component<{}, undefined> {
    render() {
        let x = <div className="pt-dialog">
            <div className="pt-dialog-header">
                <span className="pt-icon-large pt-icon-pulse"></span>
                <h5>DbgEngDotNet</h5>
                <button aria-label="Close" className="pt-dialog-close-button pt-icon-help"></button>
            </div>

            <form>
                <div className="pt-dialog-body">
                    <p>
                        Supply a memory dump, and optionally symbol file,
                        and <strong>DbgEngDotNet</strong> will output
                        the result of <code>!analyze -v</code>.
                    </p>

                    <hr />

                    <div className="pt-form-group">
                        <label className="pt-label" htmlFor="memory-dump">Memory Dump</label>

                        <div className="pt-form-content">
                            <label className="pt-file-upload pt-fill">
                                <input type="file" id="memory-dump" />
                                <span className="pt-file-upload-input">Choose file...</span>
                            </label>

                            <div className="pt-form-helper-text">Helper text with details / user feedback</div>
                        </div>
                    </div>

                    <div className="pt-form-group">
                        <label className="pt-label" htmlFor="symbol-file">Symbol File{" "}</label>

                        <div className="pt-form-content">
                            <label className="pt-file-upload pt-fill">
                                <input type="file" id="symbol-file" />
                                <span className="pt-file-upload-input">Choose file...</span>
                            </label>

                            <div className="pt-form-helper-text">Helper text with details / user feedback</div>
                        </div>
                    </div>

                    <hr />
                </div>

                <div className="pt-dialog-footer">
                    <div className="pt-dialog-footer-actions">
                        <button type="button" className="pt-button">Reset Form</button>
                        <button type="submit" className="pt-button pt-intent-primary">Analyze</button>
                    </div>
                </div>
            </form>
        </div>;

        return <div>{x}</div>;
    }
}