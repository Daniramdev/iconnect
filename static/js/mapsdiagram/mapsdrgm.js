
Highcharts.mapChart('mapdgrm', {
    title: {
        text: 'BJJ MILESTONES'
    },
    // ... (other chart configurations)

    series: [{
        data: [

            {

                "id": "id0",
                "name": "Tasik",
                "path": "M501,503,510,483,526,477,534,462,542,450,550,433,572,433,586,428,580,421,577,409,574,396,592,394,604,402,630,411,642,407,647,417,670,434L680,434L695,435,713,436C730,437,739,435,739,435L746,436,772,463L796,463L801,475,813,485,827,503,825,522,843,544,852,546,860,554,878,580,876,595,886,609,891,637,887,654,902,681,881,686,832,683,817,685,797,696,795,716,767,737,741,732,708,730,666,723,634,718,611,706,576,700,550,699,540,685,509,672,495,676,485,662,474,652,458,638,434,632,422,625,412,621,397,612,392,594,398,578,412,568,413,546,405,529,412,514,438,507,460,534,467,531,486,523,506,530,507,528,511,516z",
                "color": "#808080ff",
            },
            {
                "id": "id1",
                "name": "Cirebon",
                "path": "M603,408,650,420,669,442,744,441,771,466,802,471,819,496,834,476,857,465,874,473,889,457,905,453,911,426,900,404,893,373,923,352,916,326,879,348,853,326,842,328,817,287,814,206,780,193,735,126,694,124,680,138,678,153,625,141,591,118,588,138,587,157,578,180,575,201,578,230,556,253,548,282,555,322,539,344,525,343,516,381,541,402z",
                "color": "#01b0f1ff",
            },
            {
                "id": "id2",
                "name": "Bandung",
                "path": "M378,610,364,606,350,608,335,610,300,599C276,592,261,588,255,588,249,587,205,585,157,582L70,578,63,571C55,563,37,554,33,556,31,557,28,556,19,552L8,547,4,536C2,529,1,524,1,523,1,518,20,477,25,472,26,471,32,468,37,464,46,459,47,458,55,446,62,434,63,433,63,424L64,414,58,408C53,402,52,401,37,398,25,394,21,394,17,395,12,396,11,396,12,394,13,393,15,384,18,376,25,356,25,356,36,342,42,336,50,325,54,319,63,305,67,303,73,305,75,306,82,309,89,312L101,316,118,308C135,300,135,300,139,302,142,303,147,307,151,311,157,319,158,319,176,324,201,331,206,332,212,328,220,323,230,309,236,295,239,288,241,281,242,281,242,281,246,281,250,282,263,284,291,286,292,285,292,284,297,283,301,281,308,279,311,276,319,268,327,260,329,257,328,256,327,255,320,247,313,238L299,222,311,214C318,210,323,206,323,205,323,205,321,201,318,197L313,189,317,185C320,180,320,180,320,163,320,143,321,141,330,135,336,131,336,130,341,114C352,79,346,66,316,54,293,45,283,39,276,31,266,19,265,19,271,8L277,-1,277,4C278,8,279,9,289,13,296,16,302,18,307,19,314,19,315,19,325,12L335,4,354,8C364,10,373,12,373,12,374,13,376,17,379,22,381,28,386,36,389,41,393,46,398,56,401,63,411,85,410,84,429,87L446,89,460,104C477,122,480,123,490,121,501,118,512,112,516,107,520,102,526,98,532,98,534,98,538,97,541,95L547,93,551,99C552,103,556,108,559,111,565,116,565,116,573,115L582,114,583,125C584,146,584,151,580,159,578,163,574,171,572,176,569,186,568,187,570,195,571,199,572,207,573,213L574,225,569,231C566,234,561,239,557,242L551,247,548,263C545,277,545,280,546,294,548,312,547,324,541,332L537,337,526,337,515,337,515,352C515,360,515,368,514,372,512,377,512,378,515,380,517,381,518,383,518,384,518,385,520,386,522,388,525,389,530,392,533,394,539,398,542,399,555,400,564,401,571,402,571,402,572,403,578,426,578,428,578,430,575,431,560,432,549,433,549,433,546,437,545,439,543,442,542,444,541,445,537,452,533,460L526,473,519,476C511,478,511,479,506,488,500,498,500,502,502,509,504,513,503,524,501,526,501,527,498,526,494,525,487,522,481,522,479,524,478,525,462,532,461,532,461,532,456,526,450,519,441,509,439,506,436,506,433,506,430,505,429,504,426,502,425,503,415,509L404,516,404,523C405,528,406,534,408,538,413,549,413,557,408,566,406,570,403,574,401,574,400,575,397,579,395,583,392,589,391,590,392,601,393,608,393,614,393,614,392,614,386,612,378,610z",
                "color": "#0071c1",
            },
            // ... (your existing data for "Tasik," "Cirebon," and "Bandung")
        ],
    },
    {
        type: 'pie',
        name: 'Total',
        data: [{
            name: 'TOTAL HC BANDUNG',
            y: 619,
            color: "#0071c1",
            showInLegend: true, // 2020 color
            dataLabels: {
                enabled: true,
                distance: -55,
                format: '{point.total} M',
                style: {
                    fontSize: '10px'
                }
            }
        }, {
            name: 'TOTAL HC TASIK',
            y: 586,
            color: "#808080ff", // 2021 color
        }, {
            name: ' TOTAL HC CIREBON',
            y: 647,
            color: "#01b0f1ff", // 2022 color
        }],
        center: ['15%', '50%'],
        size: '18%',
        innerSize: 0,
        showInLegend: true,
        dataLabels: {
            enabled: false,
        },
        borderColor: 'white',
        borderWidth: 1
    }],

    category: [{
        name: 'Year 1990',
        data: [631, 727, 3202, 721, 26]
    }, {
        name: 'Year 2000',
        data: [814, 841, 3714, 726, 31]
    }, {
        name: 'Year 2010',
        data: [1044, 944, 4170, 735, 40]
    }, {
        name: 'Year 2018',
        data: [1276, 1007, 4561, 746, 42]
    }],



    series2: [{
        // Define your map series configuration for series3 here
        // Example:
        name: 'Custom Map Series',
        type: 'map',
        data: [{

            "id": "id0",
            "name": "Tasik",
            "path": "M501,503,510,483,526,477,534,462,542,450,550,433,572,433,586,428,580,421,577,409,574,396,592,394,604,402,630,411,642,407,647,417,670,434L680,434L695,435,713,436C730,437,739,435,739,435L746,436,772,463L796,463L801,475,813,485,827,503,825,522,843,544,852,546,860,554,878,580,876,595,886,609,891,637,887,654,902,681,881,686,832,683,817,685,797,696,795,716,767,737,741,732,708,730,666,723,634,718,611,706,576,700,550,699,540,685,509,672,495,676,485,662,474,652,458,638,434,632,422,625,412,621,397,612,392,594,398,578,412,568,413,546,405,529,412,514,438,507,460,534,467,531,486,523,506,530,507,528,511,516z",
            "color": "#808080ff",
        },
        {
            "id": "id1",
            "name": "Cirebon",
            "path": "M603,408,650,420,669,442,744,441,771,466,802,471,819,496,834,476,857,465,874,473,889,457,905,453,911,426,900,404,893,373,923,352,916,326,879,348,853,326,842,328,817,287,814,206,780,193,735,126,694,124,680,138,678,153,625,141,591,118,588,138,587,157,578,180,575,201,578,230,556,253,548,282,555,322,539,344,525,343,516,381,541,402z",
            "color": "#01b0f1ff",
        },
        {
            "id": "id2",
            "name": "Bandung",
            "path": "M378,610,364,606,350,608,335,610,300,599C276,592,261,588,255,588,249,587,205,585,157,582L70,578,63,571C55,563,37,554,33,556,31,557,28,556,19,552L8,547,4,536C2,529,1,524,1,523,1,518,20,477,25,472,26,471,32,468,37,464,46,459,47,458,55,446,62,434,63,433,63,424L64,414,58,408C53,402,52,401,37,398,25,394,21,394,17,395,12,396,11,396,12,394,13,393,15,384,18,376,25,356,25,356,36,342,42,336,50,325,54,319,63,305,67,303,73,305,75,306,82,309,89,312L101,316,118,308C135,300,135,300,139,302,142,303,147,307,151,311,157,319,158,319,176,324,201,331,206,332,212,328,220,323,230,309,236,295,239,288,241,281,242,281,242,281,246,281,250,282,263,284,291,286,292,285,292,284,297,283,301,281,308,279,311,276,319,268,327,260,329,257,328,256,327,255,320,247,313,238L299,222,311,214C318,210,323,206,323,205,323,205,321,201,318,197L313,189,317,185C320,180,320,180,320,163,320,143,321,141,330,135,336,131,336,130,341,114C352,79,346,66,316,54,293,45,283,39,276,31,266,19,265,19,271,8L277,-1,277,4C278,8,279,9,289,13,296,16,302,18,307,19,314,19,315,19,325,12L335,4,354,8C364,10,373,12,373,12,374,13,376,17,379,22,381,28,386,36,389,41,393,46,398,56,401,63,411,85,410,84,429,87L446,89,460,104C477,122,480,123,490,121,501,118,512,112,516,107,520,102,526,98,532,98,534,98,538,97,541,95L547,93,551,99C552,103,556,108,559,111,565,116,565,116,573,115L582,114,583,125C584,146,584,151,580,159,578,163,574,171,572,176,569,186,568,187,570,195,571,199,572,207,573,213L574,225,569,231C566,234,561,239,557,242L551,247,548,263C545,277,545,280,546,294,548,312,547,324,541,332L537,337,526,337,515,337,515,352C515,360,515,368,514,372,512,377,512,378,515,380,517,381,518,383,518,384,518,385,520,386,522,388,525,389,530,392,533,394,539,398,542,399,555,400,564,401,571,402,571,402,572,403,578,426,578,428,578,430,575,431,560,432,549,433,549,433,546,437,545,439,543,442,542,444,541,445,537,452,533,460L526,473,519,476C511,478,511,479,506,488,500,498,500,502,502,509,504,513,503,524,501,526,501,527,498,526,494,525,487,522,481,522,479,524,478,525,462,532,461,532,461,532,456,526,450,519,441,509,439,506,436,506,433,506,430,505,429,504,426,502,425,503,415,509L404,516,404,523C405,528,406,534,408,538,413,549,413,557,408,566,406,570,403,574,401,574,400,575,397,579,395,583,392,589,391,590,392,601,393,608,393,614,393,614,392,614,386,612,378,610z",
            "color": "#0071c1",
        },

        ],
        // Additional map series options can be added here
    }]
});
