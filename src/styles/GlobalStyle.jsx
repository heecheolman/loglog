import React from 'react'
import { css } from '@emotion/core'
import { Global } from '@emotion/core'
import Helmet from 'react-helmet'

export default function GlobalStyle() {
  return (
    <>
      <Helmet>
        <link
          href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css"
          rel="stylesheet"
          type="text/css"
        />
      </Helmet>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            font-family: 'Spoqa Han Sans Neo', 'sans-serif';
            -webkit-print-color-adjust: exact;
          }

          html,
          body {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            font-size: 16px;
            transition: 0.3s background-color
              cubic-bezier(0.645, 0.045, 0.355, 1);

            #___gatsby {
              width: 100%;
              height: 100%;

              #gatsby-focus-wrapper {
                width: inherit;
                height: inherit;
              }
            }
          }

          body {
            --bg: #fff;
            --bgInverse: #212529;
            --textNormal: #495057;
            --textWeak: #868e96;
            --textTitle: #495057;
            --primary: #578cdc;
            --textQuote: #8b93ac;
            --textQuoteBg: #f9f9f9;
            --dividerBg: #e2e3eb;
            --codeBg: #f2f6fc;
            --codeColor: #3b79d6;

            --primaryButtonBg: #e7f5ff;
            --primaryButtonHoverBg: #d0ebff;
            --primaryButtonText: #1c7ed6;
            --borderWeak: #dee2e6;

            background-color: var(--bg);
          }

          body.dark {
            -webkit-font-smoothing: antialiased;
            --bg: #1c1e2a;
            --bgInverse: #fff;
            --codeBg: #2a2e3a;
            --codeColor: #cacaca;
            --textNormal: #ced4da;
            --textWeak: #868e96;
            --textTitle: #f9f9f9;
            --primary: #578cdc;

            --textQuote: rgb(137, 143, 164);
            --textQuoteBg: #111219;
            --dividerBg: #9da3b9;

            --primaryButtonBg: #282e3e;
            --primaryButtonHoverBg: #2e3446;
            --primaryButtonText: #1c7ed6;
            --borderWeak: #495057;
          }
        `}
      />
    </>
  )
}
