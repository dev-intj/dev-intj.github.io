import React from "react";
import { IconContext } from "react-icons";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Header = () => {
    const { t, i18n } = useTranslation();
    const data = t('data', { returnObjects: true });
    return (
        <>
        </>
    )
}
export default Header;