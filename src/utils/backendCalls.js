// export const signup = async (values) => {
//     try {
//         await response({
//             url: "/user/register",
//             method: "post",
//             data: values,
//         });
//         if (response) {
//         }
//     } catch (e) {
//         console.log("error:", e);
//     }
// };

// export const login = async (values) => {
//     try {
//         await response({
//             url: "/user/register",
//             method: "post",
//             data: values,
//         });
//         if (response) {
//         }
//     } catch (e) {
//         console.log("error:", e);
//     }
// };

export const getServices = async (values) => {
    try {
        await response({
            url: "/user/register",
            method: "post",
            data: values,
        });
        if (response) {
        }
    } catch (e) {
        console.log("error:", e);
    }
};
