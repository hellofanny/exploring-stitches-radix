import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import { css, createStitches } from "@stitches/react";
import { purple, slate } from "@radix-ui/colors";
import * as Dialog from "@radix-ui/react-dialog";

//base tokens
//theme with createStitches -> css variables <3
const { css } = createStitches({
  theme: {
    colors: {
      ...purple,
      ...slate,
      black: "black",
      white: "white",
      gray: "dimgray",
    },
    fontSizes: {
      small: "13px",
      medium: "18px",
    },
    space: {
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
    },
    radii: {
      round: "20px",
    },
  },
  utils: {
    paddingX: (value: number) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value: number) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
});

const button = css({
  appearance: "none",
  border: "none",
  paddingX: "$4",
  paddingY: "$2",
  borderRadius: "$round",
  color: "$white",

  variants: {
    size: {
      small: { fontSize: 13 },
      medium: { fontSize: 18 },
    },
    variant: {
      primary: {
        backgroundColor: "$purple3",
        color: "$purple11",
        "&:hover": {
          backgroundColor: "$purple4",
        },
      },
      dark: {
        backgroundColor: "$slate3",
        color: "$slate12",
        "&:hover": {
          backgroundColor: "$slate4",
        },
      },
    },
    outlined: {
      true: {
        border: "2px solid",
        backgroundColor: "transparent",
      },
    },
  },

  compoundVariants: [
    {
      variant: "primary",
      outlined: true,
      css: {
        borderColor: "$purple7",
      },
    },
    {
      variant: "dark",
      outlined: true,
      css: {
        borderColor: "$slate7",
      },
    },
  ],
  defaultVariants: {
    variant: "primary",
    size: "$small",
  },
});

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Exploring Stitches & Radix UI</title>
        <meta name="description" content="Exploring Stitches and Radix UI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>stitches</h1>
        <div>
          <section className={styles.section}>
            <button className={button()}>Button</button>

            <button className={button({ variant: "dark" })}>Button</button>

            <button className={button({ outlined: true })}>
              Button Outlined
            </button>

            <button className={button({ variant: "dark", outlined: true })}>
              Button Dark Outlined
            </button>
          </section>

          <hr />

          <section className={styles.section}>
            <button className={button({ size: "$small" })}>
              Button size small
            </button>

            <button
              className={button({
                size: {
                  "@initial": "$small",
                  "@media (min-width: 500px)": "$medium",
                },
              })}
            >
              Responsive Button
            </button>
          </section>
          <hr />
          <section className={styles.section}>
            <h2>Hello</h2>
            <Dialog.Root>
              <Dialog.Trigger>Edit Profile</Dialog.Trigger>
              <Dialog.Overlay />
              <Dialog.Content>
                <Dialog.Title>Edit Profile</Dialog.Title>
                <Dialog.Description>
                  Make changes to your profile here. Click save when you're done
                  😉
                </Dialog.Description>
                <fieldset>
                  <label htmlFor="name">Name</label>
                  <input id="name" defaultValue="Fanny" />
                </fieldset>
                <fieldset>
                  <label htmlFor="username">Username</label>
                  <input id="username" defaultValue="@hellofanny" />
                </fieldset>
                <div>
                  <Dialog.Close className={button({ variant: "dark" })}>
                    Close
                  </Dialog.Close>
                  <button className={button()}>Save Changes</button>
                </div>
              </Dialog.Content>
            </Dialog.Root>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
