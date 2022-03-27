// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */

import { useContext } from 'solid-js'
import { initI18nSolid } from 'typesafe-i18n/solid'
import type { Formatters, Locales, TranslationFunctions, Translations } from './types.actual.js'
import { loadedFormatters, loadedLocales } from './util.actual.js'

const { component: TypesafeI18n, context: I18nContext } = initI18nSolid<Locales, Translations, TranslationFunctions, Formatters>(loadedLocales, loadedFormatters)

const useI18nContext = () => useContext(I18nContext)

export { I18nContext, useI18nContext }

export default TypesafeI18n
