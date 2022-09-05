export default {
    install(app) {
        import.meta.glob('../components/base/*.vue', {
            eager: true,
        });
    },
};
