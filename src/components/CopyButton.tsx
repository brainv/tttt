import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";

interface Props {
    command: string;
}

export function CopyButton({ command }: Props) {
    const [copied, setCopied] = useState(false);
    const copiedTimeout = useRef<number | undefined>(undefined);

    const copyCommand = () => {
        navigator.clipboard.writeText(command);

        if (copiedTimeout.current) {
            clearTimeout(copiedTimeout.current);
            copiedTimeout.current = undefined;
        }
        setCopied(true);
        copiedTimeout.current = (setTimeout(() => setCopied(false), 5_000) as unknown) as number;
    };

    return (
        <OverlayTrigger
            placement="right"
            overlay={<Tooltip id="tooltip-copy-athletes">{copied ? "Copied!" : "Copy Discord Bot command"}</Tooltip>}
        >
            <Button variant="outline-link" size="sm" className="m-0 p-0 border-0" onClick={copyCommand}>
                <FontAwesomeIcon icon={faCopy} />
            </Button>
        </OverlayTrigger>
    );
}
