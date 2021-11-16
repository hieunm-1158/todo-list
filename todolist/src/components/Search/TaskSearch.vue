<template>
  <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
    <div class="input-group">
      <input
        name="keyword"
        type="text"
        class="form-control"
        placeholder="Nhập từ khóa..."
      />
      <span class="input-group-btn">
        <button class="btn btn-primary" type="button">
          <span class="fa fa-search mr-5" />{{ $t("searchTitle") }}
        </button>
      </span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
