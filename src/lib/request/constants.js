export const config = {
    changeStep: () => ({
        url: '/painel'
    }),

    patchUser: (document) => ({
        url: `/credit-card/v1/user/${document}/invoices`
    }),
};