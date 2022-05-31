import usePolicyIsActive from "./usePolicyIsActive";

describe('the usePolicyIsActive hook', () => {
    it('returns true when the policy is active', () => {
        const start = '2022-02-02';
        const end = '2023-02-01';

        const result = usePolicyIsActive(start, end);
        expect(result).toBeTruthy();
    })
    it('returns false when the policy is lapsed', () => {
        const start = '2021-02-02';
        const end = '2022-02-01';

        const result = usePolicyIsActive(start, end);
        expect(result).toBeFalsy();
    })
    it('returns false when both policy start and end are a future date', () => {
        const start = '2024-02-02';
        const end = '2023-02-01';

        const result = usePolicyIsActive(start, end);
        expect(result).toBeFalsy();
    })
    it('returns false when just the policy start is a future date', () => {
        const start = '2023-02-01';
        const end = '2022-01-01';

        const result = usePolicyIsActive(start, end);
        expect(result).toBeFalsy();
    })
})