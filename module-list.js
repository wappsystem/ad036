(function(){
    var modules={
        "panel-main":    			{url:"$H/m/panel-main.html",router:1},
        "panel-child":    			{url:"$H/m/panel-child.html"},
        
        "participant-data":   		{url:"$H/m/participant/participant-data.html",Table:"ad036-participant",form_module:"participant-form",router:1,
                                            child_panel:"panel-child",
                                            questionnaire_setup:"online-questionnaire-setup-ad036",
                                            online_questionnaire:"online-questionnaire-app-ad036",
                                            participant_id:{field1:"Subject_ID",field2:"Subject_Initials"}
                                        },
        "participant-form":   		{url:"$H/m/participant/participant-form.html",Table:"ad036-participant"},

        "online-questionnaire-setup-ad036": 	{url:"$H/m/oq-setup.html",Table:"ad036-participant"},
        "online-questionnaire-app-ad036":    {url:"$H/oq.html"},

        "notes-data":  	                    {url:"$H/m/library/notes-data.html",Table:"ad036-notes",form_module:"notes-form",router:1},
        "notes-form":  	                    {url:"$H/m/library/notes-form.html",Table:"ad036-notes"},


        "ad036-w2-1back-data":      {url:"$H/m/neurocog/nback2-data.html",Table:"ad036-w2-1back",form_module:"ad036-w2-1back-form",task_name:"Week 2 - 1 Back"},
        "ad036-w2-1back-form":		{url:"$H/m/neurocog/nback2-form.html",Table:"ad036-w2-1back",task_name:"1 Back"},
        "ad036-w2-2back-data":      {url:"$H/m/neurocog/nback2-data.html",Table:"ad036-w2-2back",form_module:"ad036-w2-2back-form",task_name:"Week 2 - 2 Back"},
        "ad036-w2-2back-form":		{url:"$H/m/neurocog/nback2-form.html",Table:"ad036-w2-2back",task_name:"2 Back"},
        "ad036-practice-2back-data":      {url:"$H/m/neurocog/nback2-data.html",Table:"ad036-practice-2back",form_module:"ad036-practice-2back-form",task_name:"Practice - 2 Back"},
        "ad036-practice-2back-form":		{url:"$H/m/neurocog/nback2-practice-form.html",Table:"ad036-practice-2back",task_name:"2 Back"},
        "ad036-w2-3back-data":      {url:"$H/m/neurocog/nback2-data.html",Table:"ad036-w2-3back",form_module:"ad036-w2-3back-form",task_name:"Week 2 - 3 Back"},
        "ad036-w2-3back-form":		{url:"$H/m/neurocog/nback2-form.html",Table:"ad036-w2-3back",task_name:"3 Back"},
        "ad036-w2-dsst-data":		{url:"$H/m/neurocog/dsst-data.html",Table:"ad036-w2-dsst",form_module:"ad036-w2-dsst-form",task_name:"Week 2 - Digital Symbol Substitution Task"},
        "ad036-w2-dsst-form":		{url:"$H/m/neurocog/dsst-form.html",Table:"ad036-w2-dsst",task_name:"Digital Symbol Substitution Task"},
        "ad036-practice-dsst-data":		{url:"$H/m/neurocog/dsst-data.html",Table:"ad036-practice-dsst",form_module:"ad036-practice-dsst-form",task_name:"Practice - Digital Symbol Substitution Task"},
        "ad036-practice-dsst-form":		{url:"$H/m/neurocog/dsst-practice-form.html",Table:"ad036-practice-dsst",task_name:"Digital Symbol Substitution Task"},
        "ad036-w2-aused90-data":	{url:"$H/m/library/aused-90-data.html",Table:"ad036-w2-aused90",form_module:"ad036-w2-aused90-form",task_name:"Week 2 - Aused 90 mins"},
        "ad036-w2-aused90-form":	{url:"$H/m/library/aused-90-form.html",Table:"ad036-w2-aused90",task_name:"Week 2 - Aused 90 mins"},
        "ad036-w2-aused30-data":	{url:"$H/m/library/aused-30-data.html",Table:"ad036-w2-aused30",form_module:"ad036-w2-aused30-form",task_name:"Week 2 - Aused 30 mins"},
        "ad036-w2-aused30-form":	{url:"$H/m/library/aused-30-form.html",Table:"ad036-w2-aused30",task_name:"Week 2 - Aused 30 mins"},

        "ad036-w6-1back-data":      {url:"$H/m/neurocog/nback2-data.html",Table:"ad036-w6-1back",form_module:"ad036-w6-1back-form",task_name:"Week 6 - 1 Back"},
        "ad036-w6-1back-form":		{url:"$H/m/neurocog/nback2-form.html",Table:"ad036-w6-1back",task_name:"1 Back"},
        "ad036-w6-2back-data":      {url:"$H/m/neurocog/nback2-data.html",Table:"ad036-w6-2back",form_module:"ad036-w6-2back-form",task_name:"Week 6 - 2 Back"},
        "ad036-w6-2back-form":		{url:"$H/m/neurocog/nback2-form.html",Table:"ad036-w6-2back",task_name:"2 Back"},
        "ad036-w6-3back-data":      {url:"$H/m/neurocog/nback2-data.html",Table:"ad036-w6-3back",form_module:"ad036-w6-3back-form",task_name:"Week 6 - 3 Back"},
        "ad036-w6-3back-form":		{url:"$H/m/neurocog/nback2-form.html",Table:"ad036-w6-3back",task_name:"3 Back"},
        "ad036-w6-dsst-data":		{url:"$H/m/neurocog/dsst-data.html",Table:"ad036-w6-dsst",form_module:"ad036-w6-dsst-form",task_name:"Week 6 - Digital Symbol Substitution Task"},
        "ad036-w6-dsst-form":		{url:"$H/m/neurocog/dsst-form.html",Table:"ad036-w6-dsst",task_name:"Digital Symbol Substitution Task"},
        "ad036-w6-aused90-data":	{url:"$H/m/library/aused-90-data.html",Table:"ad036-w6-aused90",form_module:"ad036-w6-aused90-form",task_name:"Week 6 - Aused 90 mins"},
        "ad036-w6-aused90-form":	{url:"$H/m/library/aused-90-form.html",Table:"ad036-w6-aused90",task_name:"Week 6 - Aused 90 mins"},
        "ad036-w6-aused30-data":	{url:"$H/m/library/aused-30-data.html",Table:"ad036-w6-aused30",form_module:"ad036-w6-aused30-form",task_name:"Week 6 - Aused 30 mins"},
        "ad036-w6-aused30-form":	{url:"$H/m/library/aused-30-form.html",Table:"ad036-w6-aused30",task_name:"Week 6 - Aused 30 mins"},

        "ad036-w2-e-ess-data":		{url:"$H/m/ess-data.html",Table:"ad036-w2-e-ess",form_module:"ad036-w2-e-ess-form",task_name:"Week 2 Evening - Epworth Sleepiness Scale (ESS)"},
        "ad036-w2-e-ess-form":		{url:"$H/m/ess-form.html",Table:"ad036-w2-e-ess",task_name:"Epworth Sleepiness Scale (ESS)"},
        "ad036-w2-e-kss-data":		{url:"$H/m/kss-data.html",Table:"ad036-w2-e-kss",form_module:"ad036-w2-e-kss-form",task_name:"Week 2 Evening - Karolinska Sleepiness Scale (KSS)"},
        "ad036-w2-e-kss-form":		{url:"$H/m/kss-form.html",Table:"ad036-w2-e-kss",task_name:"Karolinska Sleepiness Scale (KSS)"},
        "ad036-w2-e-isi-data":		{url:"$H/m/isi-data.html",Table:"ad036-w2-e-isi",form_module:"ad036-w2-e-isi-form",task_name:"Week 2 Evening - Insomnia Severity Index (ISI)"},
        "ad036-w2-e-isi-form":		{url:"$H/m/isi-form.html",Table:"ad036-w2-e-isi",task_name:"Insomnia Severity Index (ISI)"},
        "ad036-w2-e-fosq-data":		{url:"$H/m/fosq-data.html",Table:"ad036-w2-e-fosq",form_module:"ad036-w2-e-fosq-form",task_name:"Week 2 Evening - Funtional Outcomes of Sleep Questionnaire (FOSQ)"},
        "ad036-w2-e-fosq-form":		{url:"$H/m/fosq-form.html",Table:"ad036-w2-e-fosq",task_name:"Funtional Outcomes of Sleep Questionnaire (FOSQ)"},

        "ad036-w2-m-ess-data":		{url:"$H/m/ess-data.html",Table:"ad036-w2-m-ess",form_module:"ad036-w2-m-ess-form",task_name:"Week 2 Morning - Epworth Sleepiness Scale (ESS)"},
        "ad036-w2-m-ess-form":		{url:"$H/m/ess-form.html",Table:"ad036-w2-m-ess",task_name:"Epworth Sleepiness Scale (ESS)"},
        "ad036-w2-m-kss-data":		{url:"$H/m/kss-data.html",Table:"ad036-w2-m-kss",form_module:"ad036-w2-m-kss-form",task_name:"Week 2 Morning - Karolinska Sleepiness Scale (KSS)"},
        "ad036-w2-m-kss-form":		{url:"$H/m/kss-form.html",Table:"ad036-w2-m-kss",task_name:"Karolinska Sleepiness Scale (KSS)"},
        "ad036-w2-m-isi-data":		{url:"$H/m/isi-data.html",Table:"ad036-w2-m-isi",form_module:"ad036-w2-m-isi-form",task_name:"Week 2 Morning - Insomnia Severity Index (ISI)"},
        "ad036-w2-m-isi-form":		{url:"$H/m/isi-form.html",Table:"ad036-w2-m-isi",task_name:"Insomnia Severity Index (ISI)"},
        "ad036-w2-m-fosq-data":		{url:"$H/m/fosq-data.html",Table:"ad036-w2-m-fosq",form_module:"ad036-w2-m-fosq-form",task_name:"Week 2 Morning - Funtional Outcomes of Sleep Questionnaire (FOSQ)"},
        "ad036-w2-m-fosq-form":		{url:"$H/m/fosq-form.html",Table:"ad036-w2-m-fosq",task_name:"Funtional Outcomes of Sleep Questionnaire (FOSQ)"},

    }
    for(p in modules){
        $vm.module_list[p]=modules[p];
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    if(window.location.toString().indexOf('tb=demo')!=-1){
        for(p in $vm.module_list){
            $vm.module_list[p].Table="demo-"+$vm.module_list[p].Table;
        }
    }
})();
