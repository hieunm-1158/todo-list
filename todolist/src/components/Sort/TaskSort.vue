<template>
  <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
    <div class="dropdown">
      <button
        class="btn btn-primary dropdown-toggle"
        type="button"
        id="dropdownMenu1"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="true"
      >
        {{ $t("sortTitle") }} <span class="fa fa-caret-square-o-down ml-5" />
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
        <li>
          <a href="/#" role="button" class="sort_selected">
            <span class="fa fa-sort-alpha-asc pr-5"> Tên A-Z </span>
          </a>
        </li>
        <li>
          <a href="/#" role="button" class="">
            <span class="fa fa-sort-alpha-desc pr-5"> Tên Z-A </span>
          </a>
        </li>
        <li role="separator" class="divider" />
        <li><a href="/#" role="button">Trạng Thái Kích Hoạt</a></li>
        <li><a href="/#" role="button">Trạng Thái Ẩn</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
