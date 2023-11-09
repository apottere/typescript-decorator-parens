function GenericDecorator<_T>(_target: any, _key: string, descriptor: PropertyDescriptor) {
    return descriptor;
}

export class SomeClass {
    @(GenericDecorator<'test'>)
    public someFunction() {
        return 42;
    }
}
