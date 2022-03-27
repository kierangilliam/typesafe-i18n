// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
// @ts-check
/* eslint-disable */

/**
 * @typedef { import('typesafe-i18n/solid').SolidInit<Locales, Translations, TranslationFunctions> } SolidInit,
 * @typedef { import('./types.actual.js').Formatters } Formatters,
 * @typedef { import('./types.actual.js').Locales } Locales,
 * @typedef { import('./types.actual.js').TranslationFunctions } TranslationFunctions,
 * @typedef { import('./types.actual.js').Translations } Translations
 */

import { useContext } from 'solid-js'
import { initI18nSolid } from 'typesafe-i18n/solid'

import { loadedFormatters, loadedLocales } from './util.actual.js'

/** @type { SolidInit } */
const { component: TypesafeI18n, context: I18nContext } = initI18nSolid(loadedLocales, loadedFormatters)

const useI18nContext = () => useContext(I18nContext)

export { I18nContext, useI18nContext }

export default TypesafeI18n
