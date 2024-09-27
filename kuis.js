// Ambil elemen tabel dan tombol
const table = document.getElementById('myTable').getElementsByTagName('tbody')[0];
const addRowButton = document.getElementById('addRowButton');

// Fungsi untuk menambahkan baris baru
addRowButton.addEventListener('click', function() {
    // Hitung jumlah baris saat ini
    const rowCount = table.rows.length;

    // Buat baris baru
    const newRow = table.insertRow();

    // Tambahkan sel untuk nomor urut
    const noCell = newRow.insertCell(0);
    noCell.textContent = rowCount + 1;

    // Tambahkan sel untuk data lain
    const nameCell = newRow.insertCell(1);
    const ageCell = newRow.insertCell(2);
    const birthDateCell = newRow.insertCell(3);
    const prodiCell = newRow.insertCell(4);

    // Isi sel dengan data
    nameCell.textContent = 'Nama Baru';
    ageCell.textContent = 'Usia Baru';
    birthDateCell.textContent = 'Tanggal Lahir Baru';
    prodiCell.textContent = 'Prodi Baru';

    // Tambahkan event listener ke kolom Prodi
    prodiCell.addEventListener('click', function() {
        alert('Anda mengklik prodi: ' + prodiCell.textContent);
    });
});

// Tambahkan event listener pada kolom Prodi yang sudah ada
const prodiCells = table.querySelectorAll('td:nth-child(5)');
prodiCells.forEach(cell => {
    cell.addEventListener('click', function() {
        alert('Anda mengklik prodi: ' + cell.textContent);
    });
});
