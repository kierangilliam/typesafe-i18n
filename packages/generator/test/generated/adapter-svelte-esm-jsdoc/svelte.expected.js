// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
// @ts-check
/* eslint-disable */

/**
 * @typedef { import('typesafe-i18n/svelte').SvelteStoreInit<Locales, Translations, TranslationFunctions> } SvelteStoreInit,
 * @typedef { import('./types.actual.js').Formatters } Formatters,
 * @typedef { import('./types.actual.js').Locales } Locales,
 * @typedef { import('./types.actual.js').TranslationFunctions } TranslationFunctions,
 * @typedef { import('./types.actual.js').Translations } Translations
 */

import { initI18nSvelte } from 'typesafe-i18n/svelte'

import { loadedFormatters, loadedLocales } from './util.actual.js'

/** @type { SvelteStoreInit } */
const { locale, LL, setLocale } = initI18nSvelte(loadedLocales, loadedFormatters)

export { locale, LL, setLocale }

export default LL
