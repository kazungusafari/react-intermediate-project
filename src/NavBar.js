import React from "react";
import { Link } from "@reach/router";
import colors from "./colors";
import { css } from "@emotion/react";

const NavaBar = () => (
  <header
    css={css`
      background-color: ${colors.secondary};
      padding: 16px;
    `}
  >
    <Link to="/">Adopt Me!</Link>
    <span
      css={css`
        font-size: 60px;
      `}
      aria-label="logo"
      role="img"
    >
      🐴
    </span>
  </header>
);

export default NavaBar;
