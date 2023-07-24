/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useTheme, Typography } from "@mui/material";

function error() {
  const { i18n } = useTranslation();
  const theme = useTheme();

  return (
    <>
      <div className={`App ${theme.palette.mode}`}>
        <Helmet>
          <title>
            {i18n.language === "ar"
              ? "React App برنامج الـ"
              : "React App"}
          </title>
          <meta
            name="description"
            content="description"
          />
        </Helmet>
        <main id="main">
          <Typography variant="h2" color="red">Error 404</Typography>
        </main>
      </div>
    </>
  );
}

export default error;
