var ltmp_ru_arr={
	settings_caption:'Настройки Vizonator',
	current_status:'Текущий статус',
	status_used_account:'используется аккаунт <b>{account}</b>',
	empty_memo_title:'Приватный memo ключ не был предоставлен, кто угодно сможет видеть заметки в ваших наградах через блокчейн обозреватель',
	memo_title:'Приватный memo ключ был предоставлен, ваши заметки в наградах будут зашифрованы, только социальный шлюз сможет прочесить их',
	empty_active_title:'Приватный active ключ не был предоставлен',
	active_title:'Приватный active ключ был предоставлен, вы можете использовать его с помощью web3 провайдера',
	remove_account_caption:'Удалить учетные данные',
	remove_last_account_caption:'Удалить учетные данные и все настройки',

	select_account_title:'Выберите аккаунт',
	current_account_caption:'Используемый аккаунт',
	delete_account_caption:'Удалить данные аккаунта',
	edit_account_caption:'Редактировать данные аккаунта',
	add_account_title:'Добавление аккаунта',
	edit_account_title:'Изменение аккаунта',
	add_account_caption:'Добавить аккаунт',

	empty_account:'аккаунт не был предоставлен',
	connect_account:'Подключите аккаунт VIZ',
	form_login:'Логин аккаунта',
	form_login_edit_descr:'Выбранный аккаунт (только чтение)',
	form_regular_key:'Приватный обычный ключ (regular)',
	form_regular_key_short:'Приватный обычный ключ',
	form_regular_key_edit_descr:'Вы можете изменить приватный обычный ключ',
	form_memo_key:'Приватный ключ заметок (memo)',
	form_memo_key_short:'Приватный ключ заметок',
	form_memo_key_descr:'Нужен для шифрования заметок',
	form_active_key:'Приватный активный ключ (active)',
	form_active_key_short:'Приватный активный ключ',
	form_active_key_descr:'Нужен для web3 операций (переводов, делегирования)',
	form_key_exist:'Ключ сохранен',
	form_save_caption:'Сохранить данные аккаунта',
	form_edit_caption:'Сохранить изменения',
	form_optional:'опционально',
	form_invalid_keys:'Предоставленные ключи недействительны: ',

	removed_data:'✔️ Все данные из локального хранилища были удалены. <a class="refresh-page dashed">Перезагрузите текущую страницу</a> для повторной настройки.',

	language:'язык',
	energy_step:'шаг энергии в процентах',
	award_energy:'энергия награды по умолчанию в процентах',
	dark_mode:'Темный режим',
	save_settings_caption:'Сохранить настройки',

	lock_caption:'Зашифровать паролем',
	lock_descr:'Вы можете добавить пароль для использования Визонатора. Все данные будут зашифрованы.',
	lock_password:'пароль',
	lock_button:'Зашифровать',
	locked_descr:'<b>Все данные зашифрованы паролем.</b> Вы можете заменить его или удалить шифрование.',
	lock_update_button:'Заменить пароль',
	lock_remove_button:'Удалить шифрование',

	history_form_title:'История',
	load_history_action:'Загрузить историю&hellip;',
	history_fully_load:'✔️ История полностью загружена',
	history_award:'Награждение <a class="view-account" href="https://info.viz.plus/accounts/{receiver}/" target="_blank">{receiver}</a> энергией <span class="view-percent">{energy}%</span>',
	history_award_memo:' с заметкой ',
	history_fixed_award:'Награждение <a class="view-account" href="https://info.viz.plus/accounts/{receiver}/" target="_blank">{receiver}</a> суммой <span class="view-tokens">{reward_amount}</span>',
	history_delegate_vesting_shares:'<span class="view-tokens">{shares}</span> делегировано <a class="view-account" href="https://info.viz.plus/accounts/{delegatee}/" target="_blank">{delegatee}</a>',
	history_income_delegate_vesting_shares:'<span class="view-tokens">{shares}</span> делегировано от <a class="view-account" href="https://info.viz.plus/accounts/{delegator}/" target="_blank">{delegator}</a>',
	history_revoke_delegate_vesting_shares:'Отзыв делегирования <a class="view-account" href="https://info.viz.plus/accounts/{delegatee}/" target="_blank">{delegatee}</a>',
	history_income_revoke_delegate_vesting_shares:'Отозвано делегирование от <a class="view-account" href="https://info.viz.plus/accounts/{delegator}/" target="_blank">{delegator}</a>',
	history_receive_award:'Получена награда <span class="view-tokens">{shares}</span> от <a class="view-account" href="https://info.viz.plus/accounts/{initiator}/" target="_blank">{initiator}</a>',
	history_create_invite:'Выписан чек на <span class="view-tokens">{tokens}</span> с кодом проверки <span class="view-key">{key}</span>',
	history_claim_invite_balance:'Погашен чек с кодом <span class="view-key">{key}</span>',
	history_use_invite_balance:'Погашен чек с кодом <span class="view-key">{key}</span>',
	history_transfer_from:'<span class="view-tokens">{tokens}</span> отправлено <a class="view-account" href="https://info.viz.plus/accounts/{to}/" target="_blank">{to}</a>',
	history_transfer_to:'<span class="view-tokens">{tokens}</span> получено от <a class="view-account" href="https://info.viz.plus/accounts/{from}/" target="_blank">{from}</a>',
	history_transfer_memo:' с заметкой ',
	history_transfer_to_vesting_from:'<span class="view-tokens">{tokens}</span> отправлено в социальный капитал <a class="view-account" href="https://info.viz.plus/accounts/{to}/" target="_blank">{to}</a>',
	history_transfer_to_vesting_to:'<span class="view-tokens">{tokens}</span> получено в социальный капитал от <a class="view-account" href="https://info.viz.plus/accounts/{from}/" target="_blank">{from}</a>',
	history_withdraw_vesting_stop:'Остановка понижения социального капитала',
	history_withdraw_vesting:'Активация понижения социального капитала суммой <span class="view-tokens">{shares}</span>',
	history_fill_vesting_withdraw:'Получено <span class="view-tokens">{tokens}</span> от понижения социального капитала',
	history_fill_vesting_withdraw_from:'Аккаунту <a class="view-account" href="https://info.viz.plus/accounts/{to}/" target="_blank">{to}</a> отправлено <span class="view-tokens">{tokens}</span> от понижения социального капитала',
	history_fill_vesting_withdraw_to:'Получено <span class="view-tokens">{tokens}</span> от понижения социального капитала аккаунтом <a class="view-account" href="https://info.viz.plus/accounts/{from}/" target="_blank">{from}<a>',

	default_date_utc:' UTC',
	default_no_items:'Записей не найдено.',

	rules_caption:'Правила',
	delete_rule:'удалить',
	empty_rules:'Правил не было найдено. Вы можете запомнить правило для подтверждения или отказа от операций определенного типа для отдельного сайта поставив галочку «Запомнить».',

	need_encode_state:'Разблокируйте Визонатор',
	unlock_form:'<center><input type="password" autocomplete="off" class="decode_password" value="" placeholder="%%lock_password%%"><div class="big-icon"><a class="header-icon unlock-action">{icon}</a></div></center>',
	configure_account:'Настройте аккаунт VIZ',
	used_account:'Аккаунт',
	advertise_page:'Продвижение страницы',
	saved:'Сохранено',
	energy_caption:'Энергия',
	capital_caption:'Соц. Капитал',
	balance_caption:'Баланс',
	show_effective_capital:'Учитывать делегирование',
	stake_form_title:'Увеличить Социальный Капитал',
	unstake_form_title:'Уменьшить Социальный Капитал',
	delegate_form_title:'Делегирование',
	wallet_form_title:'Кошелек',
	award_form_title:'Наградить',
	publish_form_title:'Публикация',

	stake_action:'Увеличить',

	stop_unstake_action:'Остановить уменьшение',
	unstake_duration_caption:'Продлится',
	unstake_action:'Запустить уменьшение',
	unstake_withdraw_rate_caption:'Скорость уменьшения',
	unstake_next_withdraw_caption:'Следующее уменьшение',
	unstake_awaiting_withdraw_caption:'Осталось',
	default_days:'дней',
	default_hours:'часов',

	delegate_form_account:'Получатель',
	delegate_action:'Делегировать',
	delegate_hint:'Пусто или ноль запустит процесс отмены делегирования, которое продлится сутки.',

	publish_action:'Опубликовать',
	publish_form_text:'Текст',
	publish_form_share:'Поделиться текущей вкладкой',
	publish_hint:'Внимание! Все отправленное в блокчейн невозможно будет удалить или скрыть.',
	publish_success_link:'✔️ <a href="{link}" target="_blank">Ссылка на пост</a>',

	transfer_form_account:'Получатель',
	transfer_form_memo:'Заметка',
	transfer_form_encode_memo:'Зашифровать',
	transfer_action:'Отправить',

	award_form_account:'Получатель',
	award_form_memo:'Заметка',
	award_form_encode_memo:'Зашифровать',
	award_form_fixed_flag:'Задать сумму',
	award_action:'Наградить',

	default_recipient_error:'Проверьте аккаунт получателя',
	recipient_memo_error:'Получатель не поддерживает зашифрованные заметки',
	encrypt_memo_error:'Не удалось зашифровать заметку',
	default_not_enough_energy:'Недостаточно энергии',
	default_enter_energy:'Введите затрачиваемую энергию',
	default_enter_amount:'Введите сумму',
	default_check_amount:'Проверьте сумму',
	default_insufficient_funds:'Недостаточно средств',
	default_insufficient_potential:'Недостаточно потенциала',
	operation_error:'❌ Ошибка в операции',
	operation_success:'✔️ Операция выполнена',

	operation_error:'Ошибка, попробуйте снова.',
	refuse_caption:'Отказ',
	approve_caption:'Утвердить',
	save_rule_caption:'Запомнить',

	memo_caption:'Заметка',
	encode_memo_caption:'Шифрование заметки',
	sequence_caption:'Номер',
	beneficiaries_caption:'Бенефициары',
	origin_caption:'Сайт',
	spend_energy_caption:'Потратить энергию',
	max_energy_caption:'Макс. трата энергии',
	reward_amount_caption:'Размер награды',
	amount_caption:'Количество',
	authority_caption:'Тип доступа',
	protocol_caption:'Протокол',
	json_caption:'JSON',
	vote_percent_caption:'Процент голосования',
	operations_caption:{
		transfer:'Перевод',
		transfer_to_vesting:'Стэйкинг',
		withdraw_vesting:'Анстейкинг',
		delegate_vesting_shares:'Делегирование',
		undelegate_vesting_shares:'Разделегирование',
		committee_vote_request:'Голосование в комитете',
		custom:'Кастом от',
		get_custom_account:'Информация об аккаунте',
		get_custom_current_account:'Информация о текущем аккаунте',
		get_account:'Получить текущий аккаунт',
		get_settings:'Получить настройки',
		account_metadata:'Обновить мета-данные',
		get_account_history:'Получить историю для',
		get_current_account_history:'Получить историю аккаунта',
		passwordless_auth:'Беспарольная аутентификация',
	}
};