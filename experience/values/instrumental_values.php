<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/header.php"; 
?>

<div class="description">
    <h1>Hoe je iets doet.</h1>
    <p>
        In de situatie die je eerder beschreef, had je behoefte aan <span id="need-sentence"></span>. 
    </p>
    <p>
        Afhankelijk van een situatie kiezen we voor een manier waarop wij deze behoefte vervullen.
        Dat noemen we intstrumentele waarden.
    </p>
    <p>
        Wat past volgens jouw het beste bij de situatie? (Kies er maximaal 2).
    </p>
    <p>
        <i>
            "<span id="moment-description"></span>"
        </i>
    </p>
</div>

<div class="content">
    <label class="form-status hidden"></label>

    <div class="select-list" id="select-instrumental-values"></div>

    <div class="load-more">
        <label class="button big" onclick="loadMoreValues('instrumental', '#select-instrumental-values')">Meer</label>
    </div>
</div>

<div class="actions">
    <div class="left">
        <a class="button big" href="/experience/values/needs.php">Vorige</a>
    </div>

    <div class="middle">
    </div>

    <div class="right">
        <a class="button big" href="/experience/values/terminal_values.php" onclick="return saveValuesSelection('#select-instrumental-values', 'instrumental')">Volgende</a>
    </div>
</div>

<script>
    checkIfAnyValuesOtherwiseRedirect("instrumental", "/experience/values/terminal_values.php");
    getMomentDescription("text", "#moment-description");
    loadNeedsSentence("#need-sentence");
    loadValueSelectList("instrumental", "#select-instrumental-values");
</script>

<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/footer.php"; 
?>