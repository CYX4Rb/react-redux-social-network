export const required = value => value ? undefined : 'Required'

export const MaxLengthCreator = maxLength => value => {
    return value.length > maxLength ? 'Max length' : undefined
}