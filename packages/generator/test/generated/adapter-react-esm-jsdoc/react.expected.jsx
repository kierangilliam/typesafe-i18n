// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
// @ts-check
/* eslint-disable */

/**
 * @typedef { import('typesafe-i18n/react').ReactInit<Locales, Translations, TranslationFunctions> } ReactInit,
 * @typedef { import('./types.actual.js').Formatters } Formatters,
 * @typedef { import('./types.actual.js').Locales } Locales,
 * @typedef { import('./types.actual.js').TranslationFunctions } TranslationFunctions,
 * @typedef { import('./types.actual.js').Translations } Translations
 */

import { useContext } from 'react'
import { initI18nReact } from 'typesafe-i18n/react'

import { loadedFormatters, loadedLocales } from './util.actual.js'

/** @type { ReactInit } */
const { component: TypesafeI18n, context: I18nContext } = initI18nReact(loadedLocales, loadedFormatters)

const useI18nContext = (): I18nContextType<Locales, Translations, TranslationFunctions> => useContext(I18nContext)

export { I18nContext, useI18nContext }

export default TypesafeI18n
