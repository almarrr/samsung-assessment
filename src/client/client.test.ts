import { test, expect, expectTypeOf } from 'vitest'
import { SamsungClient } from './client'

test('Test API Product result length and type', async () => {
    const result = await SamsungClient.fetchProducts();
    expect(result).toBeInstanceOf(Array)
    expect(result.length).toBeGreaterThan(0)

    for (const item of result) {
        expectTypeOf(item.fmyMarketingName).toMatchTypeOf<string>();
        expect(item.modelList).toBeInstanceOf(Array);
        expect(item.modelList.length).toBeGreaterThan(0);
    }
});