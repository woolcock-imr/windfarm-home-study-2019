(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        //-------------------------------------------------------------------------------------
        //randomisation
        "randomisation-data":		        {url:"$H/m/tasks/randomisation-data.html",Table:"91000792",form_module:"randomisation-form"},
        "randomisation-form":		        {url:"$H/m/tasks/randomisation-form.html",Table:"91000792"},
        //-------------------------------------------------------------------------------------
        //tasks
        "s-phone-screening-hearing-data":	{url:"$H/m/tasks/phone-screening-hearing-data.html",Table:"91000793",form_module:"s-phone-screening-hearing-form"},
        "s-phone-screening-hearing-form":	{url:"$H/m/tasks/phone-screening-hearing-form.html",Table:"91000793",task_name:"phone-screening-hearing"},
        "s-consent-data":	                {url:"$H/m/tasks/consent-data.html",Table:"91000794",form_module:"s-consent-form"},
        "s-consent-form":	                {url:"$H/m/tasks/consent-form.html",Table:"91000794",task_name:"consent"},
        "s-general-information-data":	    {url:"$H/m/tasks/general-information-data.html",Table:"91000795",form_module:"s-general-information-form"},
        "s-general-information-form":	    {url:"$H/m/tasks/general-information-form.html",Table:"91000795",task_name:"general-information"},
        "s-shiftwork-data":	                {url:"$H/m/tasks/shiftwork-data.html",Table:"91000796",form_module:"s-shiftwork-form"},
        "s-shiftwork-form":	                {url:"$H/m/tasks/shiftwork-form.html",Table:"91000796",task_name:"shiftwork"},
        "s-weinstein-noise-sensitivity-score-data":	{url:"$H/m/tasks/weinstein-noise-sensitivity-score-data.html",Table:"91000797",form_module:"s-weinstein-noise-sensitivity-score-form"},
        "s-weinstein-noise-sensitivity-score-form":	{url:"$H/m/tasks/weinstein-noise-sensitivity-score-form.html",Table:"91000797",task_name:"weinstein-noise-sensitivity-score"},
        "s-check-eligibility-data":	        {url:"$H/m/tasks/check-eligibility-data.html",Table:"91000798",form_module:"s-check-eligibility-form"},
        "s-check-eligibility-form":	        {url:"$H/m/tasks/check-eligibility-form.html",Table:"91000798",task_name:"check-eligibility"},
        "s-medication-data":	            {url:"$H/m/tasks/medication-data.html",Table:"91000799",form_module:"s-medication-form"},
        "s-medication-form":	            {url:"$H/m/tasks/medication-form.html",Table:"91000799",task_name:"medication"},
        "s-sleep-disorders-and-patterns-data":	{url:"$H/m/tasks/sleep-disorders-and-patterns-data.html",Table:"91000800",form_module:"s-sleep-disorders-and-patterns-form"},
        "s-sleep-disorders-and-patterns-form":	{url:"$H/m/tasks/sleep-disorders-and-patterns-form.html",Table:"91000800",task_name:"sleep-disorders-and-patterns"},
        "s-medical-history-data":	        {url:"$H/m/tasks/medical-history-data.html",Table:"91000801",form_module:"s-medical-history-form"},
        "s-medical-history-form":	        {url:"$H/m/tasks/medical-history-form.html",Table:"91000801",task_name:"medical-history"},
        "s-insomnia-severity-index-data":	{url:"$H/m/tasks/insomnia-severity-index-data.html",Table:"91000802",form_module:"s-insomnia-severity-index-form"},
        "s-insomnia-severity-index-form":	{url:"$H/m/tasks/insomnia-severity-index-form.html",Table:"91000802",task_name:"insomnia-severity-index"},
        "s-consent-2-data":	                {url:"$H/m/tasks/consent-2-data.html",Table:"91000803",form_module:"s-consent-2-form"},
        "s-consent-2-form":	                {url:"$H/m/tasks/consent-2-form.html",Table:"91000803",task_name:"consent-2"},
        "s-actigraphy-data":	            {url:"$H/m/tasks/actigraphy-data.html",Table:"91000804",form_module:"s-actigraphy-form"},
        "s-actigraphy-form":	            {url:"$H/m/tasks/actigraphy-form.html",Table:"91000804",task_name:"actigraphy"},
        "s-sleep-diary-data":	            {url:"$H/m/tasks/sleep-diary-data.html",Table:"91000805",form_module:"s-sleep-diary-form"},
        "s-sleep-diary-form":	            {url:"$H/m/tasks/sleep-diary-form.html",Table:"91000805",task_name:"sleep-diary"},


        "b-actigraphy-data":	            {url:"$H/m/tasks/actigraphy-data.html",Table:"91000806",form_module:"b-actigraphy-form"},
        "b-actigraphy-form":	            {url:"$H/m/tasks/actigraphy-form.html",Table:"91000806",task_name:"actigraphy"},
        "b-sleep-diary-data":	            {url:"$H/m/tasks/sleep-diary-data.html",Table:"91000807",form_module:"b-sleep-diary-form"},
        "b-sleep-diary-form":	            {url:"$H/m/tasks/sleep-diary-form.html",Table:"91000807",task_name:"sleep-diary"},
        "b-attitudes-on-wind-farms-data":	{url:"$H/m/tasks/attitudes-on-wind-farms-data.html",Table:"91000808",form_module:"b-attitudes-on-wind-farms-form"},
        "b-attitudes-on-wind-farms-form":	{url:"$H/m/tasks/attitudes-on-wind-farms-form.html",Table:"91000808",task_name:"attitudes-on-wind-farms"},
        "b-cardio-and-sleep-illnesses-data":	{url:"$H/m/tasks/cardio-and-sleep-illnesses-data.html",Table:"91000809",form_module:"b-cardio-and-sleep-illnesses-form"},
        "b-cardio-and-sleep-illnesses-form":	{url:"$H/m/tasks/cardio-and-sleep-illnesses-form.html",Table:"91000809",task_name:"cardio-and-sleep-illnesses"},
        "b-sleep-disorders-and-patterns-data":	{url:"$H/m/tasks/sleep-disorders-and-patterns-data.html",Table:"91000810",form_module:"b-sleep-disorders-and-patterns-form"},
        "b-sleep-disorders-and-patterns-form":	{url:"$H/m/tasks/sleep-disorders-and-patterns-form.html",Table:"91000810",task_name:"sleep-disorders-and-patterns"},
        "b-warwick-edinburgh-mental-well-being-scale-data":	{url:"$H/m/tasks/warwick-edinburgh-mental-well-being-scale-data.html",Table:"91000811",form_module:"b-warwick-edinburgh-mental-well-being-scale-form"},
        "b-warwick-edinburgh-mental-well-being-scale-form":	{url:"$H/m/tasks/warwick-edinburgh-mental-well-being-scale-form.html",Table:"91000811",task_name:"warwick-edinburgh-mental-well-being-scale"},
        //-------------------------------------------------------------------------------------
        //app
        "panel-main":                       {url:"$H/m/panel-main.html",router:1},
        "panel-child": 		                {url:"$H/m/panel-child.html"},
        "participant-data":     	        {url:"$H/m/participant-data.html", Table:"91000790",
                                                form_module:"participant-form",
                                                panel_child:"panel-child",
                                                online_questionnaire_setup:"online-questionnaire-setup"
                                            },
        "participant-form":     	        {url:"$H/m/participant-form.html", Table:"91000790"},
        "edc-notes-data":	  		        {url:"$H/m/edc-notes-data.html",Table:"91000791",form_module:"edc-notes-form"},
        "edc-notes-form":	  		        {url:"$H/m/edc-notes-form.html",Table:"91000791"},
        "online-questionnaire-setup": 	    {url:"$H/m/online-questionnaire-setup.html",Table:"91000790"},
        "online-questionnaire-panel":       {url:"$H/m/online-questionnaire-panel.html"},
        "online-questionnaire-login":       {url:"$H/m/online-questionnaire-login.html"},
        //-------------------------------------------------------------------------------------
        //permission
        "panel-permission":   			    {url:"$H/p/panel-permission.html",router:1},
        "permission-check":                 {url:"$H/p/permission-check.html"},
        "permission-role-login-data":       {url:"$H/p/permission-role-login-data.html",Table:"91000789",form_module:"permission-role-login-form"},
        "permission-role-login-form":       {url:"$H/p/permission-role-login-form.html",Table:"91000789"},
        "permission-role-table-group-data": {url:"$H/p/permission-role-table-group-data.html",Table:"91000788",form_module:"permission-role-table-group-form"},
        "permission-role-table-group-form": {url:"$H/p/permission-role-table-group-form.html",Table:"91000788"},
        "permission-query-data":            {url:"$H/p/permission-query-data.html",Table:"91000787",form_module:"permission-query-form"},
        "permission-query-form":            {url:"$H/p/permission-query-form.html",Table:"91000787"},
        //-------------------------------------------------------------------------------------
        "module-editor":                    {url:"https://vm.vmiis.com/component/m/module-editor.html",router:1,sys:1},
        //-------------------------------------------------------------------------------------
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
