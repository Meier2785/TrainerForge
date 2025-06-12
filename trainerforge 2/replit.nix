{ pkgs }: {
  deps = [
    pkgs.nodejs-18_x,
    pkgs.postgresql,
    pkgs.openssl,
    pkgs.vim,
    pkgs.git
  ];
}