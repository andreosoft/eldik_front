const BASE_URL = 'http://api.eldik.kg';
const BASE_UPLOAD = 'http://uploads.eldik.kg';
const BASE_DOCS_UPLOAD = 'http://docs-uploads.eldik.kg';

export default {
    url_upload: BASE_UPLOAD,
    docs_upload: BASE_DOCS_UPLOAD,
    token_login: BASE_URL + '/users/signup/get_token',
    set_profile: BASE_URL + '/users/signup/set_profile',
    get_profile: BASE_URL + '/users/signup/get_profile',
    is_user_login: BASE_URL + '/users/signup/is_user_login',
    users: BASE_URL + '/users/index',
    finance: BASE_URL + '/eldik/finance',
    my_finance: BASE_URL + '/eldik/partner/my_finance',
    doc: BASE_URL + '/eldik/doc',
    doc_upload: BASE_URL + '/eldik/doc/upload',
    new_docs: BASE_URL + '/eldik/doc/new_docs',
    partner_all: BASE_URL + '/eldik/partner/all',
    content: BASE_URL + '/eldik/content'
}