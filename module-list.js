(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        //-------------------------------------------------------------------------------------
        //randomisation
        //"randomisation-data":               {url:"$H/m/randomisation-data.html",Table:"91000116"}, //old pid
        //-------------------------------------------------------------------------------------
        "randomisation-data":		        {url:"$H/m/randomisation-data.html",Table:"91000792"},
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


        //-------------------------------------------------------------------------------------
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
        "b-kessler-10-data":	            {url:"$H/m/tasks/kessler-10-data.html",Table:"91000812",form_module:"b-kessler-10-form"},
        "b-kessler-10-form":	            {url:"$H/m/tasks/kessler-10-form.html",Table:"91000812",task_name:"kessler-10"},
        "b-insomnia-severity-index-data":	{url:"$H/m/tasks/insomnia-severity-index-data.html",Table:"91000813",form_module:"b-insomnia-severity-index-form"},
        "b-insomnia-severity-index-form":	{url:"$H/m/tasks/insomnia-severity-index-form.html",Table:"91000813",task_name:"insomnia-severity-index"},
        
        "b-eysenck-data":	{url:"$H/m/tasks/eysenck-data.html",Table:"91000814",form_module:"b-eysenck-form"},
        "b-eysenck-form":	{url:"$H/m/tasks/eysenck-form.html",Table:"91000814",task_name:"eysenck"},
        "b-ess-data":	{url:"$H/m/tasks/epworth-sleepiness-scale-data.html",Table:"91000815",form_module:"b-ess-form"},
        "b-ess-form":	{url:"$H/m/tasks/epworth-sleepiness-scale-form.html",Table:"91000815",task_name:"epworth-sleepiness-scale"},
        "b-dass21-data":	{url:"$H/m/tasks/depression-anxiety-stress-scales-data.html",Table:"91000816",form_module:"b-dass21-form"},
        "b-dass21-form":	{url:"$H/m/tasks/depression-anxiety-stress-scales-form.html",Table:"91000816",task_name:"depression-anxiety-stress-scales"},
        "b-vas-data":	{url:"$H/m/tasks/visual-analogue-scale-data.html",Table:"91000817",form_module:"b-vas-form"},
        "b-vas-form":	{url:"$H/m/tasks/visual-analogue-scale-form.html",Table:"91000817",task_name:"visual-analogue-scale"},
        "b-nas-data":	{url:"$H/m/tasks/noise-annoyance-scale-data.html",Table:"91000818",form_module:"b-nas-form"},
        "b-nas-form":	{url:"$H/m/tasks/noise-annoyance-scale-form.html",Table:"91000818",task_name:"noise-annoyance-scale"},
        
        "b-tower-of-london-data":	            {url:"$H/m/tasks/tower-of-london-data.html",Table:"91000819",form_module:"b-tower-of-london-form",quest_module:"b-tower-of-london-quest"},
        "b-tower-of-london-form":	            {url:"$H/m/tasks/tower-of-london-form.html",Table:"91000819"},
        "b-tower-of-london-quest":	            {url:"$H/m/tasks/tower-of-london-quest.html",Table:"91000819",task_name:"tower-of-london"},
        
        "b-nback2-data":	            {url:"$H/m/tasks/nback2-data.html",Table:"91000820",form_module:"b-nback2-form",quest_module:"b-nback2-quest"},
        "b-nback2-form":	            {url:"$H/m/tasks/nback2-form.html",Table:"91000820"},
        "b-nback2-quest":	            {url:"$H/m/tasks/nback2-quest.html",Table:"91000820",task_name:"2-back"},
        
        "b-height-weight-data":	            {url:"$H/m/tasks/height-weight-data.html",Table:"91000821",form_module:"b-height-weight-form"},
        "b-height-weight-form":	            {url:"$H/m/tasks/height-weight-form.html",Table:"91000821",task_name:"height-weight"},
        
        "b-blood-pressure-data":	            {url:"$H/m/tasks/blood-pressure-data.html",Table:"91000822",form_module:"b-blood-pressure-form"},
        "b-blood-pressure-form":	            {url:"$H/m/tasks/blood-pressure-form.html",Table:"91000822",task_name:"blood-pressure"},
        "b-pwv-data":	            {url:"$H/m/tasks/pwv-data.html",Table:"91000823",form_module:"b-pwv-form"},
        "b-pwv-form":	            {url:"$H/m/tasks/pwv-form.html",Table:"91000823",task_name:"pwv"},
        "b-psg-data":	            {url:"$H/m/tasks/psg-300-data.html",Table:"91000824",form_module:"b-psg-form"},
        "b-psg-form":	            {url:"$H/m/tasks/psg-300-form.html",Table:"91000824",task_name:"psg"},
        "b-blood-and-urine-data":	            {url:"$H/m/tasks/blood-and-urine-data.html",Table:"91000825",form_module:"b-blood-and-urine-form"},
        "b-blood-and-urine-form":	            {url:"$H/m/tasks/blood-and-urine-form.html",Table:"91000825",task_name:"blood-and-urine"},
        "b-neuro-otological-evaluation-data":	            {url:"$H/m/tasks/neuro-otological-evaluation-data.html",Table:"91000826",form_module:"b-neuro-otological-evaluation-form"},
        "b-neuro-otological-evaluation-form":	            {url:"$H/m/tasks/neuro-otological-evaluation-form.html",Table:"91000826",task_name:"neuro-otological-evaluation"},
        //-------------------------------------------------------------------------------------
        "m1-actigraphy-data":	            {url:"$H/m/tasks/actigraphy-data.html",Table:"91000847",form_module:"m1-actigraphy-form"},
        "m1-actigraphy-form":	            {url:"$H/m/tasks/actigraphy-form.html",Table:"91000847",task_name:"actigraphy"},
        "m1-sleep-diary-data":	            {url:"$H/m/tasks/sleep-diary-data.html",Table:"91000848",form_module:"m1-sleep-diary-form"},
        "m1-sleep-diary-form":	            {url:"$H/m/tasks/sleep-diary-form.html",Table:"91000848",task_name:"sleep-diary"},
        "m1-attitudes-on-wind-farms-data":	{url:"$H/m/tasks/attitudes-on-wind-farms-data.html",Table:"91000849",form_module:"m1-attitudes-on-wind-farms-form"},
        "m1-attitudes-on-wind-farms-form":	{url:"$H/m/tasks/attitudes-on-wind-farms-form.html",Table:"91000849",task_name:"attitudes-on-wind-farms"},
        "m1-cardio-and-sleep-illnesses-data":	{url:"$H/m/tasks/cardio-and-sleep-illnesses-data.html",Table:"91000850",form_module:"m1-cardio-and-sleep-illnesses-form"},
        "m1-cardio-and-sleep-illnesses-form":	{url:"$H/m/tasks/cardio-and-sleep-illnesses-form.html",Table:"91000850",task_name:"cardio-and-sleep-illnesses"},
        "m1-sleep-disorders-and-patterns-data":	{url:"$H/m/tasks/sleep-disorders-and-patterns-data.html",Table:"91000851",form_module:"m1-sleep-disorders-and-patterns-form"},
        "m1-sleep-disorders-and-patterns-form":	{url:"$H/m/tasks/sleep-disorders-and-patterns-form.html",Table:"91000851",task_name:"sleep-disorders-and-patterns"},
        "m1-warwick-edinburgh-mental-well-being-scale-data":	{url:"$H/m/tasks/warwick-edinburgh-mental-well-being-scale-data.html",Table:"91000852",form_module:"m1-warwick-edinburgh-mental-well-being-scale-form"},
        "m1-warwick-edinburgh-mental-well-being-scale-form":	{url:"$H/m/tasks/warwick-edinburgh-mental-well-being-scale-form.html",Table:"91000852",task_name:"warwick-edinburgh-mental-well-being-scale"},
        "m1-kessler-10-data":	            {url:"$H/m/tasks/kessler-10-data.html",Table:"91000853",form_module:"m1-kessler-10-form"},
        "m1-kessler-10-form":	            {url:"$H/m/tasks/kessler-10-form.html",Table:"91000853",task_name:"kessler-10"},
        "m1-insomnia-severity-index-data":	{url:"$H/m/tasks/insomnia-severity-index-data.html",Table:"91000854",form_module:"m1-insomnia-severity-index-form"},
        "m1-insomnia-severity-index-form":	{url:"$H/m/tasks/insomnia-severity-index-form.html",Table:"91000854",task_name:"insomnia-severity-index"},
        
        "m1-eysenck-data":	{url:"$H/m/tasks/eysenck-data.html",Table:"91000855",form_module:"m1-eysenck-form"},
        "m1-eysenck-form":	{url:"$H/m/tasks/eysenck-form.html",Table:"91000855",task_name:"eysenck"},
        "m1-ess-data":	{url:"$H/m/tasks/epworth-sleepiness-scale-data.html",Table:"91000815",form_module:"m1-ess-form"},
        "m1-ess-form":	{url:"$H/m/tasks/epworth-sleepiness-scale-form.html",Table:"91000815",task_name:"epworth-sleepiness-scale"},
        "m1-dass21-data":	{url:"$H/m/tasks/depression-anxiety-stress-scales-data.html",Table:"91000857",form_module:"m1-dass21-form"},
        "m1-dass21-form":	{url:"$H/m/tasks/depression-anxiety-stress-scales-form.html",Table:"91000857",task_name:"depression-anxiety-stress-scales"},
        "m1-vas-data":	{url:"$H/m/tasks/visual-analogue-scale-data.html",Table:"91000858",form_module:"m1-vas-form"},
        "m1-vas-form":	{url:"$H/m/tasks/visual-analogue-scale-form.html",Table:"91000858",task_name:"visual-analogue-scale"},
        "m1-nas-data":	{url:"$H/m/tasks/noise-annoyance-scale-data.html",Table:"91000870",form_module:"m1-nas-form"},
        "m1-nas-form":	{url:"$H/m/tasks/noise-annoyance-scale-form.html",Table:"91000870",task_name:"noise-annoyance-scale"},
        
        "m1-tower-of-london-data":	            {url:"$H/m/tasks/tower-of-london-data.html",Table:"91000859",form_module:"m1-tower-of-london-form",quest_module:"m1-tower-of-london-quest"},
        "m1-tower-of-london-form":	            {url:"$H/m/tasks/tower-of-london-form.html",Table:"91000859"},
        "m1-tower-of-london-quest":	            {url:"$H/m/tasks/tower-of-london-quest.html",Table:"91000859",task_name:"tower-of-london"},
        
        "m1-nback2-data":	            {url:"$H/m/tasks/nback2-data.html",Table:"91000860",form_module:"m1-nback2-form",quest_module:"m1-nback2-quest"},
        "m1-nback2-form":	            {url:"$H/m/tasks/nback2-form.html",Table:"91000860"},
        "m1-nback2-quest":	            {url:"$H/m/tasks/nback2-quest.html",Table:"91000860",task_name:"2-back"},
        
        "m1-height-weight-data":	            {url:"$H/m/tasks/height-weight-data.html",Table:"91000861",form_module:"m1-height-weight-form"},
        "m1-height-weight-form":	            {url:"$H/m/tasks/height-weight-form.html",Table:"91000861",task_name:"height-weight"},
        
        "m1-blood-pressure-data":	            {url:"$H/m/tasks/blood-pressure-data.html",Table:"91000862",form_module:"m1-blood-pressure-form"},
        "m1-blood-pressure-form":	            {url:"$H/m/tasks/blood-pressure-form.html",Table:"91000862",task_name:"blood-pressure"},
        "m1-pwv-data":	            {url:"$H/m/tasks/pwv-data.html",Table:"91000863",form_module:"m1-pwv-form"},
        "m1-pwv-form":	            {url:"$H/m/tasks/pwv-form.html",Table:"91000863",task_name:"pwv"},
        "m1-psg-data":	            {url:"$H/m/tasks/psg-300-data.html",Table:"91000864",form_module:"m1-psg-form"},
        "m1-psg-form":	            {url:"$H/m/tasks/psg-300-form.html",Table:"91000864",task_name:"psg"},
        "m1-blood-and-urine-data":	            {url:"$H/m/tasks/blood-and-urine-data.html",Table:"91000865",form_module:"m1-blood-and-urine-form"},
        "m1-blood-and-urine-form":	            {url:"$H/m/tasks/blood-and-urine-form.html",Table:"91000865",task_name:"blood-and-urine"},
        "m1-neuro-otological-evaluation-data":	            {url:"$H/m/tasks/neuro-otological-evaluation-data.html",Table:"91000866",form_module:"m1-neuro-otological-evaluation-form"},
        "m1-neuro-otological-evaluation-form":	            {url:"$H/m/tasks/neuro-otological-evaluation-form.html",Table:"91000866",task_name:"neuro-otological-evaluation"},
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
