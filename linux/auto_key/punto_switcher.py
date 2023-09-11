txt = clipboard.get_selection()

if txt is None or len(txt) == 0:
    pass
else:
    en = (
        u'qwertyuiop[]' +
        u'asdfghjkl;\'' +
        u'zxcvbnm,./'
    )
    ru = (
        u'йцукенгшщзхъ' +
        u'фывапролджэ' +
        u'ячсмитьбю.'
    )
    replacements = {}
    for i in range(len(en)):
        replacements[en[i]] = ru[i]
        replacements[ru[i]] = en[i]
    text_transformed = u''.join([replacements.get(char, char) for char in txt])
    clipboard.fill_clipboard(text_transformed)
    keyboard.send_keys('<delete>')
    keyboard.send_keys('<shift>+<insert>')
