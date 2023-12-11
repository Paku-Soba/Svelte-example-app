<script>
    //　import文にてtailwind取り込み
    // 反映されているか確認必要
    import '../app.css';
</script>

<div class="h-screen bg-background">
    <main>
        <div class="drawer">
            <slot />
        </div>
    </main>
</div>