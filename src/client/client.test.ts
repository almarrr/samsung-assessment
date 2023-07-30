import { test, expect, expectTypeOf } from 'vitest'
import { SamsungClient } from './client'

test('Test API Product result length and type', async () => {

    const result = await SamsungClient.fetchProducts();

    expect(result).toBeInstanceOf(Array)
    expect(result.length).toBeGreaterThan(0)

    for (const { modelList, fmyMarketingName } of result) {
        expectTypeOf(fmyMarketingName).toMatchTypeOf<string>();
        expect(modelList).toBeInstanceOf(Array);
        expect(modelList.length).toBeGreaterThan(0);
    }
});