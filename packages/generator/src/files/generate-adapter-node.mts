import type { GeneratorConfigWithDefaultValues } from '../../../config/src/types.mjs'
import { OVERRIDE_WARNING, relativeFileImportPath, tsCheck } from '../output-handler.mjs'
import { writeFileIfContainsChanges } from '../utils/file.utils.mjs'
import { prettify } from '../utils/generator.utils.mjs'

const getNodeUtils = ({ utilFileName, banner }: GeneratorConfigWithDefaultValues) => {
	return `${OVERRIDE_WARNING}${tsCheck}
${banner}

import { i18n } from '${relativeFileImportPath(utilFileName)}'
import { loadAllLocales } from '${relativeFileImportPath(`${utilFileName}.sync`)}'

loadAllLocales()

export const L = i18n()

export default L
`
}

export const generateNodeAdapter = async (config: GeneratorConfigWithDefaultValues): Promise<void> => {
	const { outputPath } = config

	const nodeUtils = getNodeUtils(config)

	const fileName = config.adapterFileName || 'i18n-node'
	await writeFileIfContainsChanges(outputPath, fileName, prettify(nodeUtils))
}
