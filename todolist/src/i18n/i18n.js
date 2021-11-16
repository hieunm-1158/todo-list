import Vue from 'vue'
import VueI18n from 'vue-i18n';
import dateTimeFormats from "./datetime";
import en from "vee-validate/dist/locale/en.json"
import vi from "vee-validate/dist/locale/vi.json"

Vue.use(VueI18n);

const messages = {
    'en': {
        appTitle:  'Job Management',
        addJobTitle: "Add Job",
        searchTitle: "Search",
        sortTitle: "Sort by",
        nameTitle: "Name",
        statusTitle: "Status",
        actionTitle: "Action",
        status:"pending | active | noactive",
        car: 'car | cars | carss',
        fields:{
            email:"E-mail",
            password: "Password"
        },
        validation: en.messages
    },
    'vi': {
        appTitle:  'Quản lý công việc',
        addJobTitle: "Thêm công việc",
        searchTitle: "Tìm kiếm",
        sortTitle: "Sắp xếp theo",
        nameTitle: "Tên",
        statusTitle: "Trạng thái",
        actionTitle: "Hành động",
        status:"Đang chờ | Kích hoạt | Huỷ kích hoạt",
        fields:{
            email:"E-mail",
            password: "Mật khẩu"
        },  
        validation: vi.messages
    }
};

const i18n = new VueI18n({
    locale: 'vi', // set locale
    fallbackLocale: 'vi', // set fallback locale
    messages, // set locale messages
    dateTimeFormats
});

export default i18n;